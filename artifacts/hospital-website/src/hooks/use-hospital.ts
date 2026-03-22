import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

// Simulated hooks for the frontend-only mockup
// These provide the necessary wiring for interactive elements

interface AppointmentData {
  department: string;
  doctor?: string;
  date?: string;
  patientName: string;
  email: string;
}

interface ContactData {
  name: string;
  email: string;
  message: string;
}

export function useBookAppointment() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: AppointmentData) => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      return { success: true, id: Math.random().toString(36).substring(7) };
    },
    onSuccess: () => {
      toast({
        title: "Appointment Requested",
        description: "We'll contact you shortly to confirm your time slot.",
        variant: "default",
      });
    },
    onError: () => {
      toast({
        title: "Booking Failed",
        description: "There was an error submitting your request. Please call us directly.",
        variant: "destructive",
      });
    }
  });
}

export function useSubmitContact() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: ContactData) => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { success: true };
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you. Our support team will get back to you within 24 hours.",
        variant: "default",
      });
    }
  });
}
