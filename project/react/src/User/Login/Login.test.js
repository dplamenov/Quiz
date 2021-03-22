import {render} from "@testing-library/react";
import Login from "./Login";
import React from "react";

test('should have heading one', () => {
    const {getAllByText} = render(<Login />);
    expect(getAllByText('Login')[0]).toBeInTheDocument();
});