Note : 📝 Inorder to Demonstrate the Portals Concept , We Have to Follow the Below Steps

1. Create the New Root Element inside the 👉 index.html , which we wanted to display rather root , in this example ,.. portal-root

2. Create the New Component which we wanted to display inside our new root.

3 Why we require new root ? bcz sometimes we have to render the UI Outside of the root.
if we try to render inside the root which will breaks the UI and its not suggestable

4.By Using createPortal Method , which accepts the 2 params ->1.jsx ->2.on element to be rendered
