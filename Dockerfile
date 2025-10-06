# Use Python 3.10 as base
FROM python:3.10

# Install git-lfs
RUN apt-get update && apt-get install -y git-lfs && git lfs install

# Install Node.js 20.x
RUN apt-get update && apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs

WORKDIR /app

# Copy everything for frontend
COPY package*.json vite.config.js index.html ./
COPY public ./public
COPY src ./src

# Copy backend
COPY backend ./backend

# Install backend dependencies
RUN cd backend && pip install -r requirements.txt

# Install frontend dependencies and build
RUN npm install && npm run build

EXPOSE 8000

CMD ["uvicorn", "backend.main:app", "--host", "0.0.0.0"]
