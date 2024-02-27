import React from "react";







import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { server } from "../mocks/server";

import App from "../components/App";

const mockAddQuestion = jest.fn();






beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  mockAddQuestion.mockClear();
});

afterAll(() => server.close());

test("creates a new question when the form is submitted", async () => {
  render(<App onAddQuestion={mockAddQuestion} />);

  await screen.findByText(/lorem testum 1/i);



  fireEvent.click(screen.queryByText("New Question"));


  fireEvent.change(screen.queryByLabelText(/Prompt/), {
    target: { value: "Test Prompt" },
  })})
