import { getTicketPrice } from "@/utils/getTicketPrice";
import { testCases } from "@/data/TC1";
import { TicketFormData } from "@/schemas/TicketOrderSchema";

describe("Trường hợp hợp lệ", () => {
  testCases.forEach((testcase) => {
    it(testcase.description, () => {
      expect(getTicketPrice(testcase.inputValue)).toBe(testcase.expectedValue);
    });
  });
});

describe("Giờ không hợp lệ", () => {
  it("Ngày thường, khách vãng lai", () => {
    const inputValue: TicketFormData = {
      weekDay: "Mon",
      time: 5.59,
      customerType: "OT",
      customerAge: 0
    };
    expect(getTicketPrice(inputValue)).toBeNull();
  });

  it("Cuối tuần, khách vãng lai", () => {
    const inputValue: TicketFormData = {
      weekDay: "Sat",
      time: 5.59,
      customerType: "OT",
      customerAge: 0
    };
    expect(getTicketPrice(inputValue)).toBeNull();
  });

  it("Ngày thường, thành viên", () => {
    const inputValue: TicketFormData = {
      weekDay: "Mon",
      time: 5.59,
      customerType: "M",
      customerAge: 0
    };
    expect(getTicketPrice(inputValue)).toBeNull();
  });

  it("Cuối tuần, thành viên", () => {
    const inputValue: TicketFormData = {
      weekDay: "Sat",
      time: 5.59,
      customerType: "M",
      customerAge: 0
    };
    expect(getTicketPrice(inputValue)).toBeNull();
  });
});

describe("Tuổi không hợp lệ", () => {
  it("Ngày thường, khách vãng lai, 6h -> 19h", () => {
    const inputValue: TicketFormData = {
      weekDay: "Mon",
      time: 6.01,
      customerType: "OT",
      customerAge: -1
    };
    expect(getTicketPrice(inputValue)).toBeNull();
  });

  it("Ngày thường, khách vãng lai, 19.01h -> 24h", () => {
    const inputValue: TicketFormData = {
      weekDay: "Mon",
      time: 19.01,
      customerType: "OT",
      customerAge: 120.1
    };
    expect(getTicketPrice(inputValue)).toBeNull();
  });

  it("Ngày thường, thành viên, 6h -> 19h", () => {
    const inputValue: TicketFormData = {
      weekDay: "Mon",
      time: 6.01,
      customerType: "M",
      customerAge: -1
    };
    expect(getTicketPrice(inputValue)).toBeNull();
  });

  it("Ngày thường, thành viên, 19.01h -> 24h", () => {
    const inputValue: TicketFormData = {
      weekDay: "Mon",
      time: 19.01,
      customerType: "M",
      customerAge: 120.1
    };
    expect(getTicketPrice(inputValue)).toBeNull();
  });

  it("Cuối tuần, khách vãng lai, 6h -> 19h", () => {
    const inputValue: TicketFormData = {
      weekDay: "Sat",
      time: 6.01,
      customerType: "OT",
      customerAge: -1
    };
    expect(getTicketPrice(inputValue)).toBeNull();
  });

  it("Cuối tuần, khách vãng lai, 19.01h -> 24h", () => {
    const inputValue: TicketFormData = {
      weekDay: "Sat",
      time: 19.01,
      customerType: "OT",
      customerAge: 120.1
    };
    expect(getTicketPrice(inputValue)).toBeNull();
  });

  it("Cuối tuần, thành viên, 6h -> 19h", () => {
    const inputValue: TicketFormData = {
      weekDay: "Sat",
      time: 6.01,
      customerType: "M",
      customerAge: -1
    };
    expect(getTicketPrice(inputValue)).toBeNull();
  });

  it("Cuối tuần, thành viên, 19.01h -> 24h", () => {
    const inputValue: TicketFormData = {
      weekDay: "Sat",
      time: 19.01,
      customerType: "M",
      customerAge: 120.1
    };
    expect(getTicketPrice(inputValue)).toBeNull();
  });
});
