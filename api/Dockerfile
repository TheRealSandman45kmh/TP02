FROM python:3-alpine3.23
RUN apk add --no-cache curl
RUN pip install mysql-connector-python fastapi uvicorn motor 
WORKDIR /app
COPY . .
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

