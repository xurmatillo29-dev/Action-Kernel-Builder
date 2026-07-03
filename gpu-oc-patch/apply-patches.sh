#!/bin/bash
# Apply GPU Overclocking Patches to Kernel Source
# For Xiaomi 12 Lite (taoyao) - LineageOS 21

set -e

echo "=========================================="
echo "GPU Overclocking Patch Installer"
echo "Device: Xiaomi 12 Lite (taoyao)"
echo "Target: 640 MHz GPU Frequency"
echo "=========================================="
echo ""

# Check if we're in kernel source directory
if [ ! -f "Makefile" ] || [ ! -d "arch/arm64/boot/dts" ]; then
    echo "❌ Error: Not in Linux kernel root directory"
    echo "Please run this script from the kernel source root"
    exit 1
fi

echo "✓ Detected Linux kernel source directory"
echo ""

# Verify patches exist
PATCH_DIR="gpu-oc-patch"
if [ ! -d "$PATCH_DIR" ]; then
    echo "❌ Error: Patch directory not found: $PATCH_DIR"
    exit 1
fi

echo "📋 Applying GPU OC patches..."
echo ""

# Apply patches
echo "[1/3] Applying GPU OPP table patch..."
patch -p1 < $PATCH_DIR/0001-add-gpu-opp-table.patch
echo "✓ GPU OPP table patch applied"
echo ""

echo "[2/3] Applying GPU DCVS OC support patch..."
patch -p1 < $PATCH_DIR/0002-gpu-dcvs-oc-support.patch
echo "✓ GPU DCVS OC support patch applied"
echo ""

echo "[3/3] Applying Adreno GPU header patch..."
patch -p1 < $PATCH_DIR/0003-adreno-gpu-oc-header.patch
echo "✓ Adreno GPU header patch applied"
echo ""

# Apply defconfig fragment
echo "📝 Applying kernel defconfig fragment..."
if [ -f "arch/arm64/configs/taoyao_defconfig" ]; then
    cat $PATCH_DIR/defconfig-gpu-oc.fragment >> arch/arm64/configs/taoyao_defconfig
    echo "✓ Defconfig fragment applied"
else
    echo "⚠️  Warning: taoyao_defconfig not found"
    echo "   Please manually merge defconfig-gpu-oc.fragment"
fi
echo ""

echo "=========================================="
echo "✅ All patches applied successfully!"
echo "=========================================="
echo ""
echo "Next steps:"
echo "1. make menuconfig  (optional, to verify GPU settings)"
echo "2. make -j$(nproc)   (build kernel)"
echo "3. Flash kernel to device"
echo ""
echo "⚠️  Important Notes:"
echo "   - Monitor GPU temperature during use"
echo "   - Maximum stable temp: 45°C (GPU)"
echo "   - Throttling at 50°C, shutdown at 60°C"
echo "   - If unstable, use stock 420 MHz setting"
echo ""
