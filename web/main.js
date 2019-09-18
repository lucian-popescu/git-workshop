class Greeter
{
    sayHello() {
        document.getElementById("greeting").innerText = "Hello World!";
    }
}

new Greeter().sayHello();
