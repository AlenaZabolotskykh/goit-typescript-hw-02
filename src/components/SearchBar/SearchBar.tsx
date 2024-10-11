import { FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

type SearchBarProps = {
  onSubmit: (query: string) => void;
};

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const [query, setQuery] = useState<string>("");

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(evt.target.value);
  };

  const notify = () => toast("Field cant be empty");

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!query.trim()) {
      notify();
      return;
    }
    onSubmit(query);
    setQuery("");
  };
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          name="search"
          value={query}
          onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>

      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid red",
            padding: "16px",
            color: "red",
            width: "500px",
            height: "100px",
            fontSize: "40px",
            fontWeight: "300px",
            margin: "0 auto",
            marginBottom: "20px",
          },
        }}
      />
    </header>
  );
}
