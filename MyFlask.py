from flask import Flask, request, render_template, url_for, redirect, session, jsonify
from chatbot import *
app = Flask(__name__)
from langchain.chat_models import ChatOpenAI
from langchain.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain.memory import ConversationBufferWindowMemory

@app.route('/', methods=['POST', 'GET'])
def home():
    if request.method == 'POST':
        income = request.form['income']
        refundVal = chatbot(str(income))
        print(refundVal)
        return {
        'refund': refundVal
        }
    else:

        return render_template('index.html')



if __name__ == '__main__':
    app.run(debug=True)
      

   

