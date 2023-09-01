import hh from "hyperscript-helpers";

const { div, button } = hh(h);

function view(dispatch, model) {
  const btnStyle = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
  return div({ className: "flex flex-col gap-4 items-center" }, [
    div({ className: "text-3xl" }, `Count: ${model}`),
    div({ className: "flex gap-4" }, [
      button({ className: btnStyle, onclick: () => dispatch(MSGS.ADD) }, "➕ Increase"),
      button({ className: btnStyle, onclick: () => dispatch(MSGS.SUBTRACT) }, "➖ Decrease"),
    ]),
  ]);
}

export default view;
aaa
