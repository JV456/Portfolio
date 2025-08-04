// Performance monitoring utility
export const performanceMonitor = {
  // Monitor FPS
  startFPSMonitor() {
    let fps = 0;
    let lastTime = performance.now();
    
    function tick() {
      const currentTime = performance.now();
      fps = Math.round(1000 / (currentTime - lastTime));
      lastTime = currentTime;
      
      if (fps < 30) {
        console.warn(`Low FPS detected: ${fps}`);
      }
      
      requestAnimationFrame(tick);
    }
    
    tick();
  },

  // Monitor memory usage
  getMemoryUsage() {
    if (performance.memory) {
      return {
        used: Math.round(performance.memory.usedJSHeapSize / 1048576),
        total: Math.round(performance.memory.totalJSHeapSize / 1048576),
        limit: Math.round(performance.memory.jsHeapSizeLimit / 1048576)
      };
    }
    return null;
  },

  // Log performance metrics
  logPerformance() {
    const memory = this.getMemoryUsage();
    if (memory) {
      console.log(`Memory Usage: ${memory.used}MB / ${memory.total}MB (Limit: ${memory.limit}MB)`);
    }
  }
};

// Auto-start monitoring in development
if (import.meta.env.DEV) {
  performanceMonitor.startFPSMonitor();
  setInterval(() => performanceMonitor.logPerformance(), 5000);
}
