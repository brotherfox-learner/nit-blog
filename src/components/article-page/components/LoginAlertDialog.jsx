import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Link } from "react-router-dom"

export default function LoginAlertDialog({ open, onOpenChange }) {
    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent className="max-sm:w-[340px] max-w-[600px] rounded-3xl px-8 py-16">
                <button
                    onClick={() => onOpenChange(false)}
                    className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                >
                    <span className="text-2xl font-bold">×</span>
                    <span className="sr-only">Close</span>
                </button>
                
                <AlertDialogHeader className="flex flex-col items-center gap-6">
                    <AlertDialogTitle className="max-sm:text-2xl max-md:text-3xl text-4xl font-bold text-center text-black">
                        Create an account to continue
                    </AlertDialogTitle>
                    
                    <Link to="/signup">
                        <AlertDialogAction className="bg-black text-white px-12 py-6 text-lg rounded-full hover:bg-gray-800 transition-colors">
                            Create account
                        </AlertDialogAction>
                    </Link>
                    
                    <AlertDialogDescription className="text-base text-gray-600">
                        Already have an account?{" "}
                        <Link to="/login" className="text-black font-semibold underline hover:text-gray-700">
                            Log in
                        </Link>
                    </AlertDialogDescription>
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>
    )
}