## Cómo ejecutar el notebook

1. Clona el repositorio y abre la carpeta principal en VS Code.
2. Con **Python 3.12** y las extensiones **Python** y **Jupyter** instaladas, ejecuta en la terminal de PowerShell:

   ```powershell
   py -3.12 -m venv .venv
   .\.venv\Scripts\Activate.ps1
   python -m pip install -r cassava/requirements.txt
   ```

3. Abre `cassava/Preparacion_Cassava.ipynb`, selecciona `.venv` como kernel y ejecuta los pasos 1 al 8. La primera vez, el Paso 2 descarga las imágenes de Cassava y puede tardar unos minutos.
