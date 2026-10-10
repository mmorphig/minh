import argparse

def create_donut(width, height, thickness, char="H", filling=None, empty=" "):
    if width < 1 or height < 1:
        raise ValueError("Width and height must be positive.")

    if thickness <= 0:
        raise ValueError("Thickness must be positive.")

    rx = (width - 1) / 2
    ry = (height - 1) / 2

    inner_rx = max(0, rx - thickness)
    inner_ry = max(0, ry - thickness)

    cx = (width - 1) / 2
    cy = (height - 1) / 2

    donut = []

    for y in range(height):
        row = []

        for x in range(width):
            dx = (x - cx) / rx if rx else 0
            dy = (y - cy) / ry if ry else 0

            outer = dx * dx + dy * dy <= 1

            if inner_rx > 0 and inner_ry > 0:
                idx = (x - cx) / inner_rx
                idy = (y - cy) / inner_ry
                inner = idx * idx + idy * idy < 1
            else:
                inner = False

            row.append(outer and not inner)

        donut.append(row)

    lines = []

    for y in range(height):
        line = []

        for x in range(width):
            if not donut[y][x]:
                line.append(empty)
                continue

            value = char

            if filling is not None:
                touching_space = False

                for dy in (-1, 0, 1):
                    for dx in (-1, 0, 1):
                        if dx == 0 and dy == 0:
                            continue

                        nx = x + dx
                        ny = y + dy

                        if (
                            nx < 0
                            or nx >= width
                            or ny < 0
                            or ny >= height
                            or not donut[ny][nx]
                        ):
                            touching_space = True
                            break

                    if touching_space:
                        break

                if not touching_space:
                    value = filling

            line.append(value)

        lines.append("".join(line))

    return "\n".join(lines)


def main():
    parser = argparse.ArgumentParser(
        description="Generate an arbitrary-size ASCII donut."
    )

    parser.add_argument("width", type=int)
    parser.add_argument("height", type=int)
    parser.add_argument("thickness", type=float)

    parser.add_argument(
        "-c", "--char",
        default="H",
        help="Outer donut character (default: H)"
    )

    parser.add_argument(
        "-f", "--filling",
        default=None,
        help="Filling character for donut cells not touching empty space"
    )

    parser.add_argument(
        "-e", "--empty",
        default=" ",
        help="Empty-space character (default: space)"
    )

    args = parser.parse_args()

    print(create_donut(
        args.width,
        args.height,
        args.thickness,
        args.char,
        args.filling,
        args.empty
    ))


if __name__ == "__main__":
    main()