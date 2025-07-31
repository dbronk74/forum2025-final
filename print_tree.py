import os

def print_tree(startpath='.'):
    for root, dirs, files in os.walk(startpath):
        if 'node_modules' in root.split(os.sep):
            continue
        level = root.replace(startpath, '').count(os.sep)
        indent = ' ' * 2 * level
        print(f"{indent}{os.path.basename(root)}/")
        for f in files:
            print(f"{indent}  {f}")

if __name__ == '__main__':
    print_tree('.')
