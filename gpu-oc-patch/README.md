# GPU Overclocking Patch for Xiaomi 12 Lite (taoyao)
# LineageOS 21 - 640 MHz GPU Configuration

This patch enables GPU overclocking to 640 MHz on Xiaomi 12 Lite running LineageOS 21.

## Device Specifications
- Device: Xiaomi 12 Lite
- Code name: taoyao
- SoC: Snapdragon 778G+ 5G
- GPU: Adreno 650
- OS: LineageOS 21 (Android 14)

## GPU Overclocking Details

### Default GPU Frequencies (MHz)
- 110
- 220
- 266
- 330
- 380
- 420

### Overclocked GPU Frequencies (MHz)
- 110
- 220
- 266
- 330
- 380
- 420
- 500
- 550
- 600
- 640 (OC)

## Changes Made

1. **Device Tree Modifications**
   - Updated GPU DCVS table with new frequency levels
   - Added 640 MHz OC frequency to the GPU frequency table
   - Configured GPU scaling driver for performance

2. **Kernel Configuration**
   - Enabled GPU DVFS (Dynamic Voltage and Frequency Scaling)
   - Set GPU performance mode optimizations
   - Configured thermal throttling thresholds

3. **Power Management**
   - Adjusted GPU voltage scaling for 640 MHz
   - Configured thermal limits to prevent overheating
   - Optimized power efficiency

## Files Modified

- `arch/arm64/boot/dts/qcom/sm8350-taoyao.dtsi`
- `arch/arm64/boot/dts/qcom/sm8350-gpu.dtsi`
- `drivers/gpu/drm/msm/gpu_dcvs_taoyao.c`
- `drivers/gpu/drm/msm/adreno_gpu.h`
- Kernel defconfig (enabling required GPU drivers)

## Installation Instructions

1. The kernel is automatically built with GPU OC support via GitHub Actions
2. Flash the resulting kernel to your Xiaomi 12 Lite
3. GPU will default to 640 MHz when at maximum performance

## Performance Notes

⚠️ **Important:**
- Monitor device temperature during use
- Maximum stable temperature: ~45°C (GPU)
- If experiencing throttling, reduce to 600 MHz or lower
- Battery usage may increase by 5-10%
- Not recommended for extended gaming sessions without proper cooling

## Thermal Management

- GPU throttling kicks in at 50°C
- Thermal shutdown at 60°C
- Recommend using cooling case during high load

## Rollback

If you experience instability:
1. Reflash the kernel from LineageOS recovery
2. Build without OC patch using standard defconfig

## Support

For issues or feedback, refer to LineageOS community forums or GitHub issues.

## Author
Created by xurmatillo29-dev

## License
GPL v2 (Linux Kernel)
