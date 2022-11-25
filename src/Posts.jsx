import { DiJsBadge } from "react-icons/di";

export const Posts = () => {
  return (
    <>
      <button
        onClick={async () => {
          try {
            let elementUL = document.createElement("ul");
            const response = await fetch(
              "https://jsonplaceholder.typicode.com/posts"
            );
            const data = await response.json();
            data.forEach((element) => {
              const elementIL = document.createElement("li");
              elementIL.innerText = element.id;
              elementUL.append(elementIL);
            });
            document.body.append(elementUL);
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <DiJsBadge />
        Traer Datos
      </button>
    </>
  );
};

<ul>
  <li></li>
  <li></li>
</ul>;
