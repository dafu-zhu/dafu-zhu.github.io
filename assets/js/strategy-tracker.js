/**
 * Strategy Performance Tracker
 * Fetches PnL data and renders interactive chart using Lightweight Charts
 */

const DATA_URL = "https://raw.githubusercontent.com/dafu-zhu/all-weather/main/data/pnl_tracker.json";

async function initStrategyTracker() {
  const container = document.getElementById("strategy-tracker-chart");
  const metricsContainer = document.getElementById("strategy-tracker-metrics");
  const statusEl = document.getElementById("strategy-tracker-status");

  if (!container || !metricsContainer || !statusEl) return;

  try {
    // Fetch data
    statusEl.textContent = "Loading...";
    const response = await fetch(DATA_URL);
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = await response.json();

    // Update status
    const lastUpdated = new Date(data.last_updated).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    statusEl.textContent = `Last updated: ${lastUpdated}`;

    // Render metrics
    const metrics = data.metrics;
    const returnClass = metrics.total_return >= 0 ? "positive" : "negative";
    metricsContainer.innerHTML = `
      <div class="metric">
        <span class="label">Return</span>
        <span class="value ${returnClass}">${metrics.total_return >= 0 ? "+" : ""}${metrics.total_return}%</span>
      </div>
      <div class="metric">
        <span class="label">Sharpe</span>
        <span class="value">${metrics.sharpe}</span>
      </div>
      <div class="metric">
        <span class="label">Max DD</span>
        <span class="value negative">${metrics.max_drawdown}%</span>
      </div>
      <div class="metric">
        <span class="label">Win Rate</span>
        <span class="value">${metrics.win_rate}%</span>
      </div>
    `;

    // Create chart
    const chart = LightweightCharts.createChart(container, {
      width: container.clientWidth,
      height: 300,
      layout: {
        background: { type: "solid", color: "transparent" },
        textColor: "#333",
      },
      grid: {
        vertLines: { color: "#eee" },
        horzLines: { color: "#eee" },
      },
      crosshair: {
        mode: LightweightCharts.CrosshairMode.Normal,
      },
      rightPriceScale: {
        borderColor: "#ccc",
      },
      timeScale: {
        borderColor: "#ccc",
        timeVisible: false,
        fixLeftEdge: true,
        fixRightEdge: true,
      },
    });

    // Add area series
    const areaSeries = chart.addAreaSeries({
      topColor: "rgba(76, 175, 80, 0.4)",
      bottomColor: "rgba(76, 175, 80, 0.0)",
      lineColor: "rgba(76, 175, 80, 1)",
      lineWidth: 2,
    });

    // Transform data for chart
    const chartData = data.pnl.map((point) => ({
      time: point.date,
      value: point.value,
    }));

    areaSeries.setData(chartData);

    // Fit content
    chart.timeScale().fitContent();

    // Handle resize
    const resizeObserver = new ResizeObserver(() => {
      chart.applyOptions({ width: container.clientWidth });
    });
    resizeObserver.observe(container);
  } catch (error) {
    console.error("Strategy tracker error:", error);
    statusEl.textContent = "Data temporarily unavailable";
    container.innerHTML = '<p style="text-align: center; color: #999; padding: 50px;">Unable to load tracker data</p>';
  }
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initStrategyTracker);
} else {
  initStrategyTracker();
}
