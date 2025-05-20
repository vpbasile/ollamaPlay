## Hardware ##

To run **LLMs like LLaMA 3 or Mistral** on Ollama, your hardware should ideally meet: 

| Resource | Minimum for Small Models (e.g. Mistral 7B) | Comfortable for Larger Models (e.g. LLaMA 3 8B+) | 
| --- | --- | --- | 
| CPU | 4-core (x86\_64) | 8+ cores | 
| RAM | 8 GB (bare minimum) | 16–32 GB | 
| Disk | 30+ GB SSD (for models + OS) | 100+ GB SSD | 
| GPU (optional) | NVIDIA with 8 GB VRAM (for speed) | 12+ GB VRAM |

## Install 

✅ Step-by-Step: Install Ollama on Windows via WSL2
🔧 1. Install WSL (if not already installed)

Open PowerShell as Administrator and run:

wsl --install

    💡 This will install Ubuntu by default. Restart your PC when prompted.

🐧 2. Open Ubuntu (WSL) and update packages

Once restarted, launch Ubuntu from the Start menu, then run:

sudo apt update && sudo apt upgrade -y

📦 3. Install Ollama in WSL

In the same Ubuntu terminal:

curl -fsSL https://ollama.com/install.sh | sh

Then start the Ollama service:

ollama serve

🤖 4. Download a model

Try downloading Mistral (a good, fast 7B model):

ollama run mistral

    This will automatically download and run the model. The first run will be slow as the model downloads (~4–8 GB).

🧠 Optional: Use with Open WebUI (locally)

You can run Open WebUI in Docker from either Windows or WSL to give you a friendly browser interface. Let me know if you want that setup too.
🧪 Tips

    If you get errors about WSL versions, make sure you're on WSL2, not WSL1.

    wsl --set-version Ubuntu 2

    Use ollama list to see installed models, ollama pull llama3 to get another one.

Would you like a Docker Compose setup to tie this together with Open WebUI and PostgreSQL?

## Ollama

Use `ollama list` to see installed models, `ollama pull llama3` to get another one.
