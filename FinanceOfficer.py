import openai
import sys
import os
from langchain.chains import ConversationalRetrievalChain, RetrievalQA
from langchain.chat_models import ChatOpenAI
from langchain.document_loaders import DirectoryLoader, TextLoader
from langchain.embeddings import OpenAIEmbeddings
from langchain.indexes import VectorstoreIndexCreator
from langchain.indexes.vectorstore import VectorStoreIndexWrapper
from langchain.llms import OpenAI
from langchain.vectorstores import Chroma
from PyPDF2 import PdfReader
from langchain.text_splitter import CharacterTextSplitter
from langchain.vectorstores import elastic_vector_search, pinecone, weaviate, FAISS
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.vectorstores import FAISS
from langchain.chains.question_answering import load_qa_chain

from langchain.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain.memory import ConversationBufferWindowMemory

os.environ["OPENAI_API_KEY"] = ''
API_KEY = ''
def chatbot(user_input):
    llm = ChatOpenAI(api_key = '')
    prompt = ChatPromptTemplate.from_messages([
        ("system", "You are a financial tax refund specialist. You will receive an income value, Filing Status ,  Standard Deduction, inputs and credits, and assume threre's no changes in the tax law or any other variables dont forget to subtract tax liabilities from a reasonable withholding value. You WILL calculate the tax refund for the user: Your response should ONLY be a number and should be based off the year specified which will tell you the standard deduction and inputs/credits. make sure to clearly show you involved tax liability and withheld value in the calculation. In your calculation first start by subtracting standard deduction from the income."),
        ("user", "Income: {income}, Filing Status: {filing_status}, year: {year}")
    ])
    output_parser = StrOutputParser()
    input_dict = {
        "income": user_input.get("income", ""),
        "filing_status": user_input.get("filing_status", ""),
        "year": user_input.get("year", "")}
    chain = prompt | llm | output_parser
    string_resp = chain.invoke(input_dict)
    last_dollar_index = string_resp.rfind('$')

    if last_dollar_index != -1:
        stripped_string = string_resp[last_dollar_index + 1:]
        return stripped_string
    else:
        return string_resp

    


memory = ConversationBufferWindowMemory(k = 20)


#conversation = ConversationChain(llm=llm)
'''
pdf_reader = PdfReader('data/fw2-2023.pdf')

text = ""
for page in pdf_reader.pages:
    text += page.extract_text()

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200,
    length_function=len
    )
chunks = text_splitter.split_text(text=text)



embeddings = OpenAIEmbeddings()
doc_search = FAISS.from_texts(chunks, embeddings)

print(chunks)
chain = load_qa_chain(ChatOpenAI(), chain_type="stuff")
query = input("User: ")
docs = doc_search.similarity_search(query)
print(chain.run(input_documents = docs, question = query))




'''