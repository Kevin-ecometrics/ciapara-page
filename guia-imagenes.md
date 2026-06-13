# 🖼️ Guía: Optimizar imágenes con Python + Pillow

> Convierte imágenes pesadas a webp liviano en segundos.  
> No necesitas conocer programación — solo copiar y pegar.

---

## Antes de empezar — Instalar Pillow

Abre tu terminal y ejecuta esto **una sola vez**:

```bash
pip install Pillow
```

> Si te dice que `pip` no existe, prueba con `pip3 install Pillow`

---

---

## SKILL 1 · Convertir UNA imagen

**Úsalo cuando:** quieres optimizar un solo archivo antes de subirlo al proyecto.

### Paso 1 — Abre tu terminal en la carpeta raíz del proyecto

```bash
cd /ruta/a/tu/proyecto
```

### Paso 2 — Copia este script, cambia solo la línea marcada y ejecútalo

```bash
python3 << 'EOF'
from PIL import Image
import os

# ✏️ CAMBIA ESTA LÍNEA — pon la ruta de tu imagen
RUTA = "public/images/mi-imagen.jpg"

# ⚙️ Configuración (no necesitas tocar esto)
MAX_DIM = 1920
QUALITY = 85

img  = Image.open(RUTA)
w, h = img.size

if max(w, h) > MAX_DIM:
    if w > h:
        img = img.resize((MAX_DIM, int(h * MAX_DIM / w)), Image.LANCZOS)
    else:
        img = img.resize((int(w * MAX_DIM / h), MAX_DIM), Image.LANCZOS)

salida = os.path.splitext(RUTA)[0] + ".webp"
img.save(salida, "webp", quality=QUALITY, method=6)

kb = os.path.getsize(salida) // 1024
print(f"✅ Listo: {salida}")
print(f"   Dimensiones: {img.size[0]}x{img.size[1]} px")
print(f"   Peso final:  {kb} KB")
EOF
```

### Qué esperar en tu terminal

```
✅ Listo: public/images/mi-imagen.webp
   Dimensiones: 1477x1920 px
   Peso final:  73 KB
```

---

---

## SKILL 2 · Optimizar TODA una carpeta de imágenes

**Úsalo cuando:** tienes varias imágenes nuevas que quieres comprimir de golpe.

### Paso 1 — Abre tu terminal en la carpeta raíz del proyecto

```bash
cd /ruta/a/tu/proyecto
```

### Paso 2 — Copia este script, cambia solo la línea marcada y ejecútalo

```bash
python3 << 'EOF'
from PIL import Image
import os

# ✏️ CAMBIA ESTA LÍNEA — pon la carpeta con tus imágenes
CARPETA = "public/images"

# ⚙️ Configuración (no necesitas tocar esto)
MAX_DIM = 1920
QUALITY = 85
FORMATOS = (".jpg", ".jpeg", ".png", ".webp", ".tiff")

bytes_antes   = 0
bytes_despues = 0

print("Procesando...\n")

for nombre in sorted(os.listdir(CARPETA)):
    if not nombre.lower().endswith(FORMATOS):
        continue

    ruta = os.path.join(CARPETA, nombre)
    bytes_antes += os.path.getsize(ruta)

    img  = Image.open(ruta)
    w, h = img.size

    if max(w, h) > MAX_DIM:
        if w > h:
            img = img.resize((MAX_DIM, int(h * MAX_DIM / w)), Image.LANCZOS)
        else:
            img = img.resize((int(w * MAX_DIM / h), MAX_DIM), Image.LANCZOS)

    salida = os.path.join(CARPETA, os.path.splitext(nombre)[0] + ".webp")
    img.save(salida, "webp", quality=QUALITY, method=6)

    kb = os.path.getsize(salida) // 1024
    bytes_despues += os.path.getsize(salida)
    print(f"  ✅ {nombre:30s} → {img.size[0]}x{img.size[1]} px | {kb} KB")

mb_antes   = bytes_antes   / 1024 / 1024
mb_despues = bytes_despues / 1024 / 1024
reduccion  = round((1 - bytes_despues / bytes_antes) * 100) if bytes_antes else 0

print(f"\n{'─'*50}")
print(f"  Antes:    {mb_antes:.1f} MB")
print(f"  Después:  {mb_despues:.1f} MB")
print(f"  Ahorro:   {reduccion}% menos 🎉")
EOF
```

### Qué esperar en tu terminal

```
Procesando...

  ✅ IMAGEN 1.webp                → 1477x1920 px | 73 KB
  ✅ IMAGEN 2.webp                → 1463x1920 px | 181 KB
  ✅ IMAGEN 3.webp                → 1347x1920 px | 565 KB
  ...

──────────────────────────────────────────────────
  Antes:    48.3 MB
  Después:  2.2 MB
  Ahorro:   95% menos 🎉
```

---

---

## SKILL 3 · Revisar pesos SIN modificar nada

**Úsalo cuando:** quieres saber qué imágenes están pesadas antes de decidir qué optimizar.

### Copia y ejecuta — no toca ningún archivo

```bash
python3 << 'EOF'
from PIL import Image
import os

# ✏️ CAMBIA ESTA LÍNEA — pon la carpeta que quieres revisar
CARPETA = "public/images"

print(f"{'Archivo':<35} {'Dimensiones':<20} {'Peso':>8}  {'Estado'}")
print("─" * 75)

total = 0
for nombre in sorted(os.listdir(CARPETA)):
    ruta = os.path.join(CARPETA, nombre)
    if not os.path.isfile(ruta):
        continue
    try:
        img = Image.open(ruta)
        kb  = os.path.getsize(ruta) // 1024
        total += os.path.getsize(ruta)
        dims  = f"{img.size[0]}x{img.size[1]} px"
        estado = "⚠️  PESADA — optimizar" if kb > 500 else "✅ OK"
        print(f"  {nombre:<33} {dims:<20} {kb:>6} KB  {estado}")
    except Exception:
        pass

print("─" * 75)
print(f"  {'TOTAL':<53} {total//1024//1024} MB")
EOF
```

### Qué esperar en tu terminal

```
Archivo                             Dimensiones          Peso   Estado
───────────────────────────────────────────────────────────────────────────
  IMAGEN 1.webp                     2535x3294 px          2100 KB  ⚠️  PESADA — optimizar
  IMAGEN 2.webp                     2522x3308 px          4200 KB  ⚠️  PESADA — optimizar
  foto-pequeña.webp                 800x600 px              95 KB  ✅ OK
───────────────────────────────────────────────────────────────────────────
  TOTAL                                                       48 MB
```

---

---

## Referencia — ¿Qué valores uso?

### Tamaño máximo (`MAX_DIM`)

| Valor | Cuándo usarlo |
|-------|---------------|
| `1280` | Imágenes decorativas, fondos, thumbnails |
| `1920` | **Uso general en este proyecto** |
| `2560` | Galerías de arte donde el detalle importa |

### Calidad (`QUALITY`)

| Valor | Resultado |
|-------|-----------|
| `75`  | Más ligero, algo de pérdida visible al zoom |
| `85`  | **Recomendado — web general** |
| `92`  | Alta fidelidad para galerías de arte |
| `95+` | Archival / pre-impresión |

---

## Formatos de entrada soportados

`.jpg` · `.jpeg` · `.png` · `.webp` · `.tiff` · `.bmp`

## Formato de salida

Siempre genera `.webp` — el formato más eficiente para web hoy en día.
