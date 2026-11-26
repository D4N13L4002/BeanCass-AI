## Cómo ejecutar el notebook

1. Clona el repositorio y abre la carpeta principal en VS Code.
2. Con **Python 3.12** y las extensiones **Python** y **Jupyter** instaladas, ejecuta en la terminal de PowerShell:

   ```powershell
   py -3.12 -m venv .venv
   .\.venv\Scripts\Activate.ps1
   python -m pip install -r requirements.txt
   ```

3. Abre `cassava/Preparacion_Cassava.ipynb`, selecciona `.venv` como kernel y ejecuta los pasos 1 al 8. La primera vez, el Paso 2 descarga las imágenes de Cassava y puede tardar unos minutos.

4. Para fréjol, abre `beans/Preparacion_Beans.ipynb` con el mismo kernel y ejecuta las celdas en orden.

## DenseNet121 para Cassava

El notebook `cassava/DenseNet121.ipynb` conserva las salidas del entrenamiento y de la evaluación en validación. Los historiales, las curvas y las matrices de las cuatro corridas están en `cassava/resultados/densenet121/`.

Para volver a ejecutar las celdas que cargan modelos guardados, necesitas colocar el archivo `mejor_modelo.keras` en la carpeta de la corrida correspondiente.
