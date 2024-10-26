import { useState } from "react";

interface TodoFormProps {
  action: string;
}

const TodoForm = ({ action }: TodoFormProps) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const maxTitleLength = 20;
  const maxDescLength = 100;

  return (
    <section className="w-full h-fit lg:px-[30vw] md:px-[10rem] px-[10px] pt-[5rem] flex">
      <div className="w-full h-full bg-[#1C1C1C] p-5 flex flex-col gap-10 rounded-lg">
        <h1 className="text-white text-3xl font-bold">What to do ?</h1>
        <form className="w-full h-full flex flex-col justify-center items-center gap-8">
          <div className="w-full relative">
            <input
              className="outline-none w-full h-[50px] bg-transparent border-2 border-[#5D5D5D] text-white px-3 py-2 rounded-lg placeholder:text-[#5D5D5D] placeholder:text-xl text-xl"
              type="text"
              placeholder="Enter your task"
              value={title}
              onChange={(e) => setTitle(e.target.value.slice(0, maxTitleLength))}
            />
            <span className="absolute right-3 bottom-3 text-[#5D5D5D] text-sm">
              {title.length}/{maxTitleLength}
            </span>
          </div>
          <div className="w-full relative">
            <textarea
              className="outline-none w-full min-h-[120px] max-h-[180px] h-[100px] bg-transparent border-2 border-[#5D5D5D] text-white px-3 py-2 rounded-lg placeholder:text-[#5D5D5D] placeholder:text-xl text-xl"
              name="desc"
              id="TodoDesc"
              placeholder="Enter Todo Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value.slice(0, maxDescLength))}
            ></textarea>
            <span className="absolute right-3 bottom-3 text-[#5D5D5D] text-sm">
              {desc.length}/{maxDescLength}
            </span>
          </div>
          <button className="w-full h-[50px] bg-[#ffffff] text-black text-xl font-bold rounded-lg">
            {action} Todo
          </button>
        </form>
      </div>
    </section>
  );
};

export default TodoForm;
