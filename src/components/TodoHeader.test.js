import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import TodoHeader from "./TodoHeader";

describe("測試input不可輸入空白", () => {
  test("當按下按鈕時，確定 mockFunc 會被呼叫", () => {
    const mockFunc = jest.fn();

    render(<TodoHeader></TodoHeader>);

    const todoHeader = screen.getByLabelText("todoHeader");

    userEvent.click(todoHeader); // 模擬使用者的點擊行為
    expect(mockFunc).toBeCalledTimes(1); // 去預測函式是否真的因為點擊而被呼叫

    userEvent.click(todoHeader);
    expect(mockFunc).toBeCalledTimes(2);
  });
});
