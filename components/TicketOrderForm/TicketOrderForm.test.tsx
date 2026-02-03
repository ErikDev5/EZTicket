import TickeOrderForm from "@/components/TicketOrderForm/TicketOrderForm";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

describe("Form hợp lệ", () => {
  it("", async () => {
    render(<TickeOrderForm />);
    const submitBtn = screen.getByRole("button", {
      name: /submit/i
    });
    expect(submitBtn).toBeInTheDocument();
    await user.click(submitBtn);
    expect(screen.getByText(/giá/i)).toBeInTheDocument();
  });
});

describe("Giờ không hợp lệ", () => {
  it("Nằm ngoài miền giá trị hợp lệ", async () => {
    render(<TickeOrderForm />);
    const timeInput = screen.getByPlaceholderText(/nhập giờ/i);
    expect(timeInput).toBeInTheDocument();
    await user.clear(timeInput);
    await user.type(timeInput, "0");
    expect(screen.queryByText("Giờ không hợp lệ")).toBeInTheDocument();
  });

  it("Giá trị không phải số", async () => {
    render(<TickeOrderForm />);
    const timeInput = screen.getByPlaceholderText(/nhập giờ/i);
    expect(timeInput).toBeInTheDocument();
    await user.clear(timeInput);
    await user.type(timeInput, "abc");
    expect(screen.queryByText("Giờ phải là số")).toBeInTheDocument();
  });
});

describe("Tuổi của khách hàng không hợp lệ", () => {
  it("Nằm ngoài miền giá trị hợp lệ", async () => {
    render(<TickeOrderForm />);
    const customerAgeInput = screen.getByPlaceholderText(/nhập tuổi/i);
    expect(customerAgeInput).toBeInTheDocument();
    await user.clear(customerAgeInput);
    await user.type(customerAgeInput, "-1");
    expect(
      screen.queryByText("Tuổi của khách hàng không hợp lệ")
    ).toBeInTheDocument();
  });

  it("Giá trị không phải số", async () => {
    render(<TickeOrderForm />);
    const customerAgeInput = screen.getByPlaceholderText(/nhập tuổi/i);
    expect(customerAgeInput).toBeInTheDocument();
    await user.clear(customerAgeInput);
    await user.type(customerAgeInput, "abc");
    expect(
      screen.queryByText("Tuổi của khách hàng phải là số")
    ).toBeInTheDocument();
  });
});
