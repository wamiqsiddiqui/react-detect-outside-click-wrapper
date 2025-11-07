# 🪄 react-detect-outside-click-wrapper

A lightweight and reusable React wrapper component that detects clicks outside its children.
Ideal for dropdowns, modals, popovers, or any element that should close when the user clicks outside.

✅ Written in TypeScript
✅ Works with React 17+ / 18+
✅ No dependencies
✅ Easy to integrate

## 🚀 Installation

Install from npm:

```bash
npm install react-detect-outside-click-wrapper
```

Or using yarn:

```bash
yarn add react-detect-outside-click-wrapper
```

## 🧩 Usage

```bash
import React, { useRef } from "react";
import { DetectOutsideClickWrapper } from "react-detect-outside-click-wrapper";

export default function Example() {
  const toggleRef = useRef<HTMLButtonElement|null>(null);

  return (
    <div>
      <button onClick={()=>{
      alert("Even though this button is outside, but it's ref is present inside the Wrapper; that's why clicking on this button doesn't trigger the outside click function. And now I can implement any related toggle functionality on this function!")
      }} ref={toggleRef}>Toggle Menu</button>

      <DetectOutsideClickWrapper
        toggleButtonRef={toggleRef} //Optional
        onClick={() => alert("Clicked outside!")}
      >
        <div
          style={{
            padding: "1rem",
            background: "#f5f5f5",
            border: "1px solid #ccc",
          }}
        >
          Click outside this box to trigger the callback.
        </div>
      </DetectOutsideClickWrapper>
    </div>
  );
}
```

## ⚙️ Props

| Prop                     | Type                                             | Default     | Description                                                                  |
| ------------------------ | ------------------------------------------------ | ----------- | ---------------------------------------------------------------------------- |
| **children**             | `React.ReactNode`                                | —           | The wrapped elements.                                                        |
| **onClick**              | `() => void`                                     | —           | Function triggered when a click outside occurs.                              |
| **disallowOutsideClick** | `boolean`                                        | `false`     | If `true`, disables the outside click detection.                             |
| **className**            | `string`                                         | `undefined` | Optional class name for the wrapper div.                                     |
| **toggleButtonRef**      | `RefObject<HTMLDivElement \| HTMLButtonElement>` | `undefined` | Reference to a toggle button that shouldn’t trigger the outside click event. |

## 🧱 Example Use Cases

- Dropdown or menu that closes when user clicks elsewhere

- Modal or dialog dismiss

- Custom tooltip or popover

- Right-click context menus

## 🧑‍💻 TypeScript Support

This library is built using TypeScript, so you get full typing and IntelliSense automatically — no need for @types/ packages.

## 🧰 Development

If you want to contribute or test locally:

```bash
# Clone the repo
git clone https://github.com/yourusername/react-detect-outside-click-wrapper.git
cd react-detect-outside-click-wrapper

# Install dependencies
npm install

# Build
npm run build

# Pack into .tgz for local testing
npm pack
```

## 🪶 License

MIT © Muhammad Wamiq Siddiqui
