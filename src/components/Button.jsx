export default function Button({ children, variant = "primary", ...props }) {
  const base = "px-6 py-3 rounded font-semibold transition"
  const styles = {
    primary: "bg-primary text-white hover:bg-secondary",
    outline: "border border-primary text-primary hover:bg-primary hover:text-white"
  }

  return (
    <button className={`${base} ${styles[variant]}`} {...props}>
      {children}
    </button>
  )
}
