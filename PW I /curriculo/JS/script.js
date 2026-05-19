// const botao = document.getElementById("tema");
//         // carrgar preferência
//         if (localStorege.getItem("tema") === "dark") {
//             document.body. classList.add("dark");
//         }

//         // alternar tema
//         botao. addEventListener("click", () => {
//             document.body.classList.toggle("dark");

//             if (document.body.classList.contains("dark")) {
//                 localStorage.setItem("tema", "dark");
//             } else {
//                 localStorage.setItem("tema", "light");
//             }
//         });


const botao = document.getElementById("tema");

const updateButtonIcon = () => {
    if (!botao) return;
    const darkmode = document.body.classList.contains("dark"); classList.contains("dark");
    botao.textocontent = darkmode ? "☀️": "🌙";
    botao.title = darkmode ? "mudar para modo claro" : "mudar para modo escuro";
};

const temaAtual = localStorage.getItem("tema") === "dark" ? "dark" : "light";
if (temaAtual === "dark") {
    document.body.classList,add("dark");
}

updateButtonIcon();

if (botao) {
    botao.addEventListene("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("tema", "dark");
        
        } else {
            localStorage.setItem("tema", "light");
        }

        updateButtonIcon();
    });
}