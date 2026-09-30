"use client";

import { createStore } from "@/redux/store";
import { useState } from "react";
import { Provider } from "react-redux";

export default function StoreProvider({children}) {
    const [store] = useState(createStore);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}