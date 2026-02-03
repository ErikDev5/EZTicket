import { TicketFormData } from "@/schemas/TicketOrderSchema";

export function getTicketPrice(info: TicketFormData): number | null {
  const isRegular = info.weekDay !== "Sat" && info.weekDay !== "Sun";
  const isOTCustomer = info.customerType === "OT";

  if (isRegular) {
    if (isOTCustomer) {
      if (6 <= info.time && info.time <= 19) {
        if (0 <= info.customerAge && info.customerAge <= 16) {
          return 5;
        } else if (16.01 <= info.customerAge && info.customerAge <= 60) {
          return 10;
        } else if (60.01 <= info.customerAge && info.customerAge <= 120) {
          return 8;
        } else {
          return null;
        }
      } else if (19.01 <= info.time && info.time <= 24) {
        if (0 <= info.customerAge && info.customerAge <= 16) {
          return 6;
        } else if (16.01 <= info.customerAge && info.customerAge <= 60) {
          return 12;
        } else if (60.01 <= info.customerAge && info.customerAge <= 120) {
          return 8;
        } else {
          return null;
        }
      } else {
        return null;
      }
    } else {
      if (6 <= info.time && info.time <= 19) {
        if (0 <= info.customerAge && info.customerAge <= 16) {
          return 2.5;
        } else if (16.01 <= info.customerAge && info.customerAge <= 60) {
          return 5;
        } else if (60.01 <= info.customerAge && info.customerAge <= 120) {
          return 4;
        } else {
          return null;
        }
      } else if (19.01 <= info.time && info.time <= 24) {
        if (0 <= info.customerAge && info.customerAge <= 16) {
          return 3;
        } else if (16.01 <= info.customerAge && info.customerAge <= 60) {
          return 6;
        } else if (60.01 <= info.customerAge && info.customerAge <= 120) {
          return 4;
        } else {
          return null;
        }
      } else {
        return null;
      }
    }
  } else {
    if (isOTCustomer) {
      if (6 <= info.time && info.time <= 19) {
        if (0 <= info.customerAge && info.customerAge <= 16) {
          return 7.5;
        } else if (16.01 <= info.customerAge && info.customerAge <= 60) {
          return 15;
        } else if (60.01 <= info.customerAge && info.customerAge <= 120) {
          return 12;
        } else {
          return null;
        }
      } else if (19.01 <= info.time && info.time <= 24) {
        if (0 <= info.customerAge && info.customerAge <= 16) {
          return 9;
        } else if (16.01 <= info.customerAge && info.customerAge <= 60) {
          return 18;
        } else if (60.01 <= info.customerAge && info.customerAge <= 120) {
          return 12;
        } else {
          return null;
        }
      } else {
        return null;
      }
    } else {
      if (6 <= info.time && info.time <= 19) {
        if (0 <= info.customerAge && info.customerAge <= 16) {
          return 3.5;
        } else if (16.01 <= info.customerAge && info.customerAge <= 60) {
          return 7;
        } else if (60.01 <= info.customerAge && info.customerAge <= 120) {
          return 5.5;
        } else {
          return null;
        }
      } else if (19.01 <= info.time && info.time <= 24) {
        if (0 <= info.customerAge && info.customerAge <= 16) {
          return 4;
        } else if (16.01 <= info.customerAge && info.customerAge <= 60) {
          return 8;
        } else if (60.01 <= info.customerAge && info.customerAge <= 120) {
          return 5.5;
        } else {
          return null;
        }
      } else {
        return null;
      }
    }
  }
}
