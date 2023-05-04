import App from "./App";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

afterEach(cleanup);

describe("Test", () => {
  test("Check App component", async () => {
    const { queryByText, queryByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );

    // eslint-disable-next-line
    expect(queryByText(/swapi/i)).toBeInTheDocument();
    // eslint-disable-next-line
    const link = queryByTestId("people-link");
    if (link) {
      userEvent.click(link);

      // eslint-disable-next-line
      expect(queryByTestId("current-people-page")).toBeInTheDocument();
    }
  });
});
