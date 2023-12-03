'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

function FormComponent({ transformUrlToCode }: { transformUrlToCode: (url: string) => void }) {
  
    return (
        <form
        className="flex flex-col gap-4"
        onSubmit={(evt) => {
            evt.preventDefault()

            const form = evt.currentTarget as HTMLFormElement
            const url = form.elements.namedItem('url') as HTMLInputElement

            transformUrlToCode(url.value)
        }}
    >
        <Label htmlFor="url">Introduce tu URL de la imagen:</Label>
        <Input name="url" id="url" type="url" placeholder="https://tu-screenshot/image.jpg" />
        <Button>Generar código de la imagen</Button>
    </form>
)
}

export default FormComponent



/*
onSubmit={(event)=> {
        event.preventDefault();
        const form = event.currentTarget as HTMLFormElement
        const url = form.elements.namedItem('url') as HTMLInputElement
        TransformUrlToCode(url.value)
    }} 
*/