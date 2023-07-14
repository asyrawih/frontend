import { Input } from "@nextui-org/react";
import { SearchIcon } from "../icons/Search";

type SearchBarProps = {
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
  value: string | undefined
}

export default function SearchBar({ onChange, value }: SearchBarProps) {
  return (
    <div className="w-full lg:w-[340px] rounded-2xl flex justify-center items-center bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
      <Input
        label="Search"
        isClearable
        radius="lg"
        onChange={onChange}
        classNames={{
          label: "text-black/50 dark:text-white/90",
        }}
        value={value}
        placeholder="Type to search..."
        startContent={
          <SearchIcon className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
      />
    </div>
  );
}
