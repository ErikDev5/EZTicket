import { TicketFormData } from "@/schemas/TicketOrderSchema";

type TestCase = {
  inputValue: TicketFormData;
  expectedValue: number;
  description: string;
};

export const testCases: TestCase[] = [
  // NT
  {
    inputValue: {
      weekDay: "Mon",
      time: 6,
      customerType: "OT",
      customerAge: 0
    },
    expectedValue: 5,
    description: "Ngày thường, khách vãng lai, giờ: 6h -> 19h, tuổi: 0 -> 16"
  },
  {
    inputValue: {
      weekDay: "Mon",
      time: 19.01,
      customerType: "OT",
      customerAge: 0
    },
    expectedValue: 6,
    description:
      "Ngày thường, khách vãng lai, giờ: 19.01h -> 24h, tuổi: 0 -> 16"
  },
  {
    inputValue: {
      weekDay: "Mon",
      time: 6,
      customerType: "M",
      customerAge: 0
    },
    expectedValue: 2.5,
    description: "Ngày thường, thành viên, giờ: 6h -> 19h, tuổi: 0 -> 16"
  },
  {
    inputValue: {
      weekDay: "Mon",
      time: 19.01,
      customerType: "M",
      customerAge: 0
    },
    expectedValue: 3,
    description: "Ngày thường, thành viên, giờ: 19.01h -> 24h, tuổi: 0 -> 16"
  },
  {
    inputValue: {
      weekDay: "Mon",
      time: 6,
      customerType: "OT",
      customerAge: 16.01
    },
    expectedValue: 10,
    description:
      "Ngày thường, khách vãng lai, giờ: 6h -> 19h, tuổi: 16.01 -> 60"
  },
  {
    inputValue: {
      weekDay: "Mon",
      time: 19.01,
      customerType: "OT",
      customerAge: 16.01
    },
    expectedValue: 12,
    description:
      "Ngày thường, khách vãng lai, giờ: 19.01h -> 24h, tuổi: 16.01 -> 60"
  },
  {
    inputValue: {
      weekDay: "Mon",
      time: 6,
      customerType: "M",
      customerAge: 16.01
    },
    expectedValue: 5,
    description: "Ngày thường, thành viên, giờ: 6h -> 19h, tuổi: 16.01 -> 60"
  },
  {
    inputValue: {
      weekDay: "Mon",
      time: 19.01,
      customerType: "M",
      customerAge: 16.01
    },
    expectedValue: 6,
    description:
      "Ngày thường, thành viên, giờ: 19.01h -> 24h, tuổi: 16.01 -> 60"
  },
  {
    inputValue: {
      weekDay: "Mon",
      time: 6,
      customerType: "OT",
      customerAge: 60.01
    },
    expectedValue: 8,
    description:
      "Ngày thường, khách vãng lai, giờ: 6h -> 19h, tuổi: 60.01 -> 120"
  },
  {
    inputValue: {
      weekDay: "Mon",
      time: 19.01,
      customerType: "OT",
      customerAge: 60.01
    },
    expectedValue: 8,
    description:
      "Ngày thường, khách vãng lai, giờ: 19.01h -> 24h, tuổi: 60.01 -> 120"
  },
  {
    inputValue: {
      weekDay: "Mon",
      time: 6,
      customerType: "M",
      customerAge: 60.01
    },
    expectedValue: 4,
    description: "Ngày thường, thành viên, giờ: 6h -> 19h, tuổi: 60.01 -> 120"
  },
  {
    inputValue: {
      weekDay: "Mon",
      time: 19.01,
      customerType: "M",
      customerAge: 60.01
    },
    expectedValue: 4,
    description:
      "Ngày thường, thành viên, giờ: 19.01h -> 24h, tuổi: 60.01 -> 120"
  },
  // CT
  {
    inputValue: {
      weekDay: "Sat",
      time: 6,
      customerType: "OT",
      customerAge: 0
    },
    expectedValue: 7.5,
    description: "Cuối tuần, khách vãng lai, giờ: 6h -> 19h, tuổi: 0 -> 16"
  },
  {
    inputValue: {
      weekDay: "Sat",
      time: 19.01,
      customerType: "OT",
      customerAge: 0
    },
    expectedValue: 9,

    description: "Cuối tuần, khách vãng lai, giờ: 19.01h -> 24h, tuổi: 0 -> 16"
  },
  {
    inputValue: {
      weekDay: "Sat",
      time: 6,
      customerType: "M",
      customerAge: 0
    },
    expectedValue: 3.5,
    description: "Cuối tuần, thành viên, giờ: 6h -> 19h, tuổi: 0 -> 16"
  },
  {
    inputValue: {
      weekDay: "Sat",
      time: 19.01,
      customerType: "M",
      customerAge: 0
    },
    expectedValue: 4,
    description: "Cuối tuần, thành viên, giờ: 19.01h -> 24h, tuổi: 0 -> 16"
  },
  {
    inputValue: {
      weekDay: "Sat",
      time: 6,
      customerType: "OT",
      customerAge: 16.01
    },
    expectedValue: 15,
    description: "Cuối tuần, khách vãng lai, giờ: 6h -> 19h, tuổi: 16.01 -> 60"
  },
  {
    inputValue: {
      weekDay: "Sat",
      time: 19.01,
      customerType: "OT",
      customerAge: 16.01
    },
    expectedValue: 18,
    description:
      "Cuối tuần, khách vãng lai, giờ: 19.01h -> 24h, tuổi: 16.01 -> 60"
  },
  {
    inputValue: {
      weekDay: "Sat",
      time: 6,
      customerType: "M",
      customerAge: 16.01
    },
    expectedValue: 7,
    description: "Cuối tuần, thành viên, giờ: 6h -> 19h, tuổi: 16.01 -> 60"
  },
  {
    inputValue: {
      weekDay: "Sat",
      time: 19.01,
      customerType: "M",
      customerAge: 16.01
    },
    expectedValue: 8,
    description: "Cuối tuần, thành viên, giờ: 19.01h -> 24h, tuổi: 16.01 -> 60"
  },
  {
    inputValue: {
      weekDay: "Sat",
      time: 6,
      customerType: "OT",
      customerAge: 60.01
    },
    expectedValue: 12,
    description: "Cuối tuần, khách vãng lai, giờ: 6h -> 19h, tuổi: 60.01 -> 120"
  },
  {
    inputValue: {
      weekDay: "Sat",
      time: 19.01,
      customerType: "OT",
      customerAge: 60.01
    },
    expectedValue: 12,
    description:
      "Cuối tuần, khách vãng lai, giờ: 19.01h -> 24h, tuổi: 60.01 -> 120"
  },
  {
    inputValue: {
      weekDay: "Sat",
      time: 6,
      customerType: "M",
      customerAge: 60.01
    },
    expectedValue: 5.5,
    description: "Cuối tuần, thành viên, giờ: 6h -> 19h, tuổi: 60.01 -> 120"
  },
  {
    inputValue: {
      weekDay: "Sat",
      time: 19.01,
      customerType: "M",
      customerAge: 60.01
    },
    expectedValue: 5.5,
    description: "Cuối tuần, thành viên, giờ: 19.01h -> 24h, tuổi: 60.01 -> 120"
  }
];
