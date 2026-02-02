const Footer = () => {
  return (
    <footer className="w-full border-t mt-10">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="font-medium text-foreground">Balena</span>. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition">Privacy</a>
          <a href="#" className="hover:text-foreground transition">Terms</a>
          <a href="#" className="hover:text-foreground transition">Support</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
