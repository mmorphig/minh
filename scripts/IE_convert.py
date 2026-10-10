#!/usr/bin/env python3
import json
from pathlib import Path

INPUT_DIR = Path.home() / ".local/share/ModrinthApp/profiles/chemistry_/kubejs/data/immersiveengineering/recipe/blueprint"
OUTPUT_FILE = Path("./IE_asbl_convert.js")

def convert_input(inp):
    amount = inp.get("count", 1)
    predicate = inp.get("basePredicate", inp)

    if "tag" in predicate:
        return {"amount": amount, "tag": predicate["tag"]}

    item = predicate.get("item", predicate.get("id"))
    if item is not None:
        return {"amount": amount, "item": item}

    raise ValueError(f"Unsupported input: {inp}")

def convert_result(result):
    item = result.get("id", result.get("item"))
    if item is None:
        raise ValueError(f"Unsupported result: {result}")

    return {
        "amount": result.get("count", 1),
        "item": item,
    }

recipes = []

if not INPUT_DIR.is_dir():
    raise SystemExit(f"Error: directory does not exist:\n{INPUT_DIR}")

for path in sorted(INPUT_DIR.glob("*.json")):
    try:
        data = json.loads(path.read_text(encoding="utf-8"))

        if data.get("type") != "immersiveengineering:blueprint":
            continue

        recipe = {
            "type": "modern_industrialization:assembler",
            "duration": 200,
            "eu": 8,
            "item_inputs": [
                convert_input(inp)
                for inp in data.get("inputs", [])
            ],
            "item_outputs": [
                convert_result(data["result"])
            ],
        }

        recipes.append((path.name, recipe))

    except Exception as e:
        print(f"Warning: skipping {path.name}: {e}")

with OUTPUT_FILE.open("w", encoding="utf-8") as f:
    f.write("// Auto-generated\n")
    f.write("ServerEvents.recipes(event => {\n")

    for filename, recipe in recipes:
        f.write(f"  // {filename}\n")

        json_text = json.dumps(recipe, indent=2, ensure_ascii=False)
        json_lines = json_text.splitlines()

        f.write("  event.custom(" + json_lines[0] + "\n")

        for line in json_lines[1:-1]:
            f.write("  " + line + "\n")

        f.write("  " + json_lines[-1] + ")\n")

    f.write("})\n")

print(f"Converted {len(recipes)} blueprint recipes.")
print(f"Output: {OUTPUT_FILE}")