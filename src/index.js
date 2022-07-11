import app from "./app";

const main = () => {
    app.listen(process.env.PORT || 5000);
    console.log(`Server on port ${app.get("port")}`);
};

main();