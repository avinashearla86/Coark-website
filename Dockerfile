FROM python:3.10

# Install Git LFS
RUN apt-get update && apt-get install -y git-lfs && git lfs install

# Install Node.js and npm (using Node 18)
RUN apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# Set working directory
WORKDIR /app

# Copy repo files
COPY . /app

# Install Python dependencies (adjust path if requirements.txt is not in backend)
RUN cd backend && pip install -r requirements.txt

# Build frontend assets
RUN cd src && npm install && npm run build

# Expose port (optional)
EXPOSE 8000

# Command to run your backend
CMD ["uvicorn", "backend.main:app", "--host", "0.0.0.0", "--port", "8000"]
