import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LabelInput({label, type, id, placeholder}) {
  return (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor={id}>{label}</Label>
      <Input type={type} id={id} placeholder={placeholder} />
    </div>
  )
}
