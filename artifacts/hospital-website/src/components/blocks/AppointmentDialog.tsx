import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useBookAppointment } from "@/hooks/use-hospital";

interface AppointmentDialogProps {
  children: React.ReactNode;
  defaultDepartment?: string;
}

export function AppointmentDialog({ children, defaultDepartment }: AppointmentDialogProps) {
  const [open, setOpen] = useState(false);
  const bookMutation = useBookAppointment();
  
  const [formData, setFormData] = useState({
    patientName: "",
    email: "",
    department: defaultDepartment || "",
    date: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    bookMutation.mutate(formData, {
      onSuccess: () => {
        setOpen(false);
        setFormData({ patientName: "", email: "", department: "", date: "" });
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Request an Appointment</DialogTitle>
          <DialogDescription>
            Fill out the form below and our scheduling team will contact you to confirm the exact time.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Patient Name</Label>
              <Input 
                id="name" 
                required 
                placeholder="John Doe"
                value={formData.patientName}
                onChange={e => setFormData(p => ({ ...p, patientName: e.target.value }))}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                required 
                placeholder="john@example.com"
                value={formData.email}
                onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dept">Department</Label>
                <Select 
                  value={formData.department} 
                  onValueChange={v => setFormData(p => ({ ...p, department: v }))}
                >
                  <SelectTrigger id="dept">
                    <SelectValue placeholder="Select one" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cardiology">Cardiology</SelectItem>
                    <SelectItem value="neurology">Neurology</SelectItem>
                    <SelectItem value="orthopedics">Orthopedics</SelectItem>
                    <SelectItem value="pediatrics">Pediatrics</SelectItem>
                    <SelectItem value="general">General Checkup</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="date">Preferred Date</Label>
                <Input 
                  id="date" 
                  type="date" 
                  required
                  value={formData.date}
                  onChange={e => setFormData(p => ({ ...p, date: e.target.value }))}
                />
              </div>
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full text-base py-6" 
            disabled={bookMutation.isPending}
          >
            {bookMutation.isPending ? "Submitting Request..." : "Confirm Request"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
