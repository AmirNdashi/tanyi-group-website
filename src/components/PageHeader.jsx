export default function PageHeader({ title, subtitle }) {
  return (
    <section className="bg-gray-100 py-20 border-b">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
