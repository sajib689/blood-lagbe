'use client'
import { Button } from "@/components/ui/button";
import { toast, Toaster } from "sonner";



export default function Home() {

  return (
    <div>
      <p>hello blood donation</p>
      <div>
        <Button variant="outline"
          onClick={() =>
            toast("Event has been created", {
              position: 'top-right',
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })}> Click me</Button>

      </div>
    </div >
  );
}
