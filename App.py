from flask import Flask, render_template, request, redirect, url_for, send_from_directory

app = Flask(__name__)

@app.route("/favicon.ico")
def favicon():
    return send_from_directory(app.static_folder, "favicon.svg", mimetype="image/svg+xml")

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/portfolio")
def portfolio():
    return redirect(url_for("home"))

@app.route("/blog")
def blog():
    return redirect(url_for("home"))

@app.route("/contato", methods=["POST"])
def contato():
    nome = request.form.get("nome")
    email = request.form.get("email")
    mensagem = request.form.get("mensagem")
    print(f"[CONTATO] Nome: {nome}, Email: {email}, Mensagem: {mensagem}")
    return redirect(url_for("home"))

if __name__ == "__main__":
    app.run(debug=True)
