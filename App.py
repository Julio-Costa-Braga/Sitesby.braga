from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/portfolio")
def portfolio():
    return render_template("portfolio.html")

@app.route("/blog")
def blog():
    posts = [
        {"titulo": "Por que ter um site profissional?", "conteudo": "Ter presença online é essencial para qualquer negócio..."},
        {"titulo": "Landing Pages que convertem", "conteudo": "Uma página bem estruturada pode dobrar sua taxa de conversão..."},
        {"titulo": "SEO ou Google Ads?", "conteudo": "Cada estratégia tem seu momento — entenda quando usar cada uma."}
    ]
    return render_template("blog.html", posts=posts)

@app.route("/contato", methods=["POST"])
def contato():
    nome = request.form.get("nome")
    email = request.form.get("email")
    mensagem = request.form.get("mensagem")
    print(f"[CONTATO] Nome: {nome}, Email: {email}, Mensagem: {mensagem}")
    return redirect(url_for("home"))

if __name__ == "__main__":
    app.run(debug=True)
