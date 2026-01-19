import { useState, useCallback, useRef, useEffect } from "react";
import { debounce } from "lodash";
import { fetchBlogPostQuery } from "../data/fetchBlogPost";

/**
 * useSearch - จัดการ search พร้อม autocomplete
 * Blog list จะ fetch เฉพาะเมื่อกด Enter, กดปุ่ม search หรือเลือก suggestion
 * Autocomplete จะ debounce 1 วินาที
 * @param {Object} options
 * @param {number} options.autocompleteLimit - จำนวน suggestions สูงสุด
 * @param {number} options.autocompleteDelay - delay สำหรับ autocomplete (ms)
 */
export function useSearch({
    autocompleteLimit = 5,
    autocompleteDelay = 500
} = {}) {
    const [inputValue, setInputValue] = useState("");
    const [searchQuery, setSearchQuery] = useState(""); // ค่าที่ใช้ fetch blog list
    const [suggestions, setSuggestions] = useState([]);
    const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(false);

    // Fetch autocomplete suggestions
    const fetchSuggestions = useCallback(async (keyword) => {
        if (!keyword.trim()) {
            setSuggestions([]);
            setIsLoadingSuggestions(false);
            return;
        }

        try {
            setIsLoadingSuggestions(true);
            const data = await fetchBlogPostQuery(1, autocompleteLimit, "", keyword);
            setSuggestions(data || []);
        } catch (error) {
            console.error("Error fetching suggestions:", error);
            setSuggestions([]);
        } finally {
            setIsLoadingSuggestions(false);
        }
    }, [autocompleteLimit]);

    // Debounced fetch suggestions - รอหลังหยุดพิมพ์
    const debouncedFetchSuggestions = useCallback(
        debounce((keyword) => {
            fetchSuggestions(keyword);
        }, autocompleteDelay, {
            trailing: true,
        }),
        [fetchSuggestions]
    );

    // Cleanup debounce on unmount
    useEffect(() => {
        return () => {
            debouncedFetchSuggestions.cancel();
        };
    }, [debouncedFetchSuggestions]);

    // Handle input change - แค่ update input value และ debounce fetch suggestions
    const handleInputChange = useCallback((e) => {
        const value = e.target.value;
        setInputValue(value);

        if (!value.trim()) {
            setSuggestions([]);
            setShowSuggestions(false);
            setIsLoadingSuggestions(false);
            debouncedFetchSuggestions.cancel();
        } else {
            setShowSuggestions(true);
            setIsLoadingSuggestions(true); // แสดง loading ทันที
            // Debounce fetch suggestions - รอ 1 วินาที
            debouncedFetchSuggestions(value);
        }

        // ไม่ update searchQuery - รอให้ user กด Enter หรือเลือก suggestion
    }, [debouncedFetchSuggestions]);

    // Handle search - update searchQuery เพื่อให้ blog list fetch
    const handleSearch = useCallback(() => {
        const query = inputValue.trim();
        setSearchQuery(query);
        setShowSuggestions(false);
        debouncedFetchSuggestions.cancel();
    }, [inputValue, debouncedFetchSuggestions]);

    // Handle Enter key press
    const handleKeyDown = useCallback((e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSearch();
        }
    }, [handleSearch]);

    // Select a suggestion - update ทั้ง input และ search query
    const handleSelectSuggestion = useCallback((suggestion) => {
        setInputValue(suggestion.title);
        setSearchQuery(suggestion.title);
        setSuggestions([]);
        setShowSuggestions(false);
        debouncedFetchSuggestions.cancel();
    }, [debouncedFetchSuggestions]);

    // Clear search
    const clearSearch = useCallback(() => {
        setInputValue("");
        setSearchQuery("");
        setSuggestions([]);
        setShowSuggestions(false);
        setIsLoadingSuggestions(false);
        debouncedFetchSuggestions.cancel();
    }, [debouncedFetchSuggestions]);

    // Close suggestions dropdown
    const closeSuggestions = useCallback(() => {
        setShowSuggestions(false);
    }, []);

    // Open suggestions dropdown
    const openSuggestions = useCallback(() => {
        if (inputValue.trim() && suggestions.length > 0) {
            setShowSuggestions(true);
        }
    }, [inputValue, suggestions]);

    return {
        inputValue,
        searchQuery, // ค่าที่ใช้ fetch blog list
        suggestions,
        isLoadingSuggestions,
        showSuggestions,
        handleInputChange,
        handleSearch, // function สำหรับกดปุ่ม search
        handleKeyDown, // function สำหรับกด Enter
        handleSelectSuggestion,
        clearSearch,
        closeSuggestions,
        openSuggestions,
        setInputValue,
    };
}
