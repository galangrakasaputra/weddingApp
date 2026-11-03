import { Link } from "react-router";
import type { Template } from "../Template/data";

interface InformationProps {
  template: Template;
}

function Information({ template }: InformationProps) {
  return (
    <div className="flex flex-col justify-center">
      <span className="w-fit rounded-full bg-rose-50 px-4 py-2 text-sm font-medium text-rose-500">
        {template.category}
      </span>

      <h1 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
        {template.name}
      </h1>

      <p className="mt-5 leading-7 text-gray-500">
        {template.description}
      </p>

      <div className="mt-8 border-y border-gray-100 py-6">
        <p className="text-sm text-gray-500">Template Price</p>

        <p className="mt-2 text-3xl font-bold text-rose-500">
          Rp{template.price.toLocaleString("id-ID")}
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          className="rounded-lg bg-rose-500 px-6 py-3 font-semibold text-white transition hover:bg-rose-600"
        >
          Buy This Template
        </button>

        <Link
          to={`/preview/${template.id}`}
          className="rounded-lg border border-gray-200 px-6 py-3 text-center font-semibold text-gray-700 transition hover:border-rose-400 hover:bg-rose-50 hover:text-rose-500"
        >
          Live Preview
        </Link>
      </div>

      <p className="mt-4 text-xs leading-6 text-gray-400">
        Purchase functionality will be available soon.
      </p>
    </div>
  );
}

export default Information;