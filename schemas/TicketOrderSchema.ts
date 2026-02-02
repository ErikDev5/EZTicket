import { z } from "zod";

export const TicketOrderSchema = z.object({
  weekDay: z.string().min(1),
  time: z.coerce.number({
    message: "Giờ không hợp lệ"
  }),
  customerType: z.string().min(1),
  customerAge: z.coerce.number({
    message: "Tuổi của khách hàng không hợp lệ"
  })
});

export type TicketFormData = z.infer<typeof TicketOrderSchema>;
