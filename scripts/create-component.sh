#!/bin/bash

# Component Generator Script
# Usage: ./scripts/create-component.sh ComponentName [shared]

COMPONENT_NAME=$1
IS_SHARED=$2

if [ -z "$COMPONENT_NAME" ]; then
  echo "Error: Component name is required"
  echo "Usage: ./scripts/create-component.sh ComponentName [shared]"
  exit 1
fi

# Determine the directory
if [ "$IS_SHARED" = "shared" ]; then
  DIR="app/components/shared"
else
  DIR="app/components"
fi

FILE_PATH="$DIR/$COMPONENT_NAME.tsx"

# Check if file already exists
if [ -f "$FILE_PATH" ]; then
  echo "Error: Component $COMPONENT_NAME already exists at $FILE_PATH"
  exit 1
fi

# Create the component file
cat > "$FILE_PATH" << EOF
interface ${COMPONENT_NAME}Props {
  className?: string;
}

export default function ${COMPONENT_NAME}({ className = '' }: ${COMPONENT_NAME}Props) {
  return (
    <div className={\`\${className}\`}>
      {/* TODO: Implement ${COMPONENT_NAME} */}
    </div>
  );
}
EOF

echo "✓ Created component: $FILE_PATH"
echo ""
echo "Next steps:"
echo "1. Implement the component logic"
echo "2. Add proper TypeScript types"
echo "3. Test the component"
if [ "$IS_SHARED" = "shared" ]; then
  echo "4. Document in app/components/shared/README.md"
fi
