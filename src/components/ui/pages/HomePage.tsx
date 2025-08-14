import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import SensorControls from "../SensorControls";
import WaterLevelCard from "../WaterLevelCard";
import RiverFlowCard from "../RiverFlowCard";
import PrecipitationCard from "../PrecipitationCard";
import ChartSection from "../ChartSection";
import { Card } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#cbdbdb" }}>
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <Header />
          <div className="flex">
            <Sidebar />
            <main className="flex-1 p-8">
              <h1 className="text-3xl font-bold text-[#000000] mb-8">Sensor 1</h1>

              <SensorControls />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <WaterLevelCard />
                <RiverFlowCard />
                <PrecipitationCard />
              </div>

              <Card className="p-6 bg-[#ffffff] border-[#d9d9d9]">
                <ChartSection />
              </Card>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
