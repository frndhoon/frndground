import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"

function App() {
  const [vhDialogOpen, setVhDialogOpen] = useState(false)
  const [dvhDialogOpen, setDvhDialogOpen] = useState(false)
  const [svhDialogOpen, setSvhDialogOpen] = useState(false)
  const [lvhDialogOpen, setLvhDialogOpen] = useState(false)

  return (
    <>
      <div className="flex gap-2 p-2">
        <Button onClick={() => setVhDialogOpen(true)}>vh</Button>
        <Button onClick={() => setDvhDialogOpen(true)}>dvh</Button>
        <Button onClick={() => setSvhDialogOpen(true)}>svh</Button>  
        <Button onClick={() => setLvhDialogOpen(true)}>lvh</Button>
      </div>
      <Dialog open={vhDialogOpen} onOpenChange={setVhDialogOpen}>
        <DialogContent className="h-[120rem] max-h-[95vh]">
          <DialogHeader>
            <DialogTitle>vh</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Dialog open={dvhDialogOpen} onOpenChange={setDvhDialogOpen}>
        <DialogContent className="h-[120rem] max-h-[95dvh]">
          <DialogHeader>
            <DialogTitle>dvh</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Dialog open={svhDialogOpen} onOpenChange={setSvhDialogOpen}>
        <DialogContent className="h-[120rem] max-h-[95svh]">
          <DialogHeader>
            <DialogTitle>svh</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Dialog open={lvhDialogOpen} onOpenChange={setLvhDialogOpen}>
        <DialogContent className="h-[120rem] max-h-[95lvh]">
          <DialogHeader>
            <DialogTitle>lvh</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default App
