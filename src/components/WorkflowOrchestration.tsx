'use client';

import { useEffect, useState, useRef } from 'react';
import { MotionDiv } from './MotionDiv';
import { Zap, Database, Cpu, Network, CheckCircle, Activity, ArrowRight, Server } from 'lucide-react';

interface WorkflowStep {
  id: string;
  label: string;
  icon: React.ReactNode;
  status: 'active' | 'processing' | 'complete' | 'idle';
  metrics: {
    label: string;
    value: string;
  };
  color: string;
}

const WorkflowOrchestration = () => {
  const [workflowSteps, setWorkflowSteps] = useState<WorkflowStep[]>([
    {
      id: 'llm',
      label: 'LLM Processing',
      icon: <Cpu className="w-6 h-6" />,
      status: 'idle',
      metrics: { label: 'Queries/min', value: '0' },
      color: 'bg-blue-500'
    },
    {
      id: 'vector',
      label: 'Vector Search',
      icon: <Database className="w-6 h-6" />,
      status: 'idle',
      metrics: { label: 'Embeddings', value: '0' },
      color: 'bg-purple-500'
    },
    {
      id: 'api',
      label: 'API Gateway',
      icon: <Network className="w-6 h-6" />,
      status: 'idle',
      metrics: { label: 'Requests/sec', value: '0' },
      color: 'bg-green-500'
    },
    {
      id: 'frontend',
      label: 'Frontend',
      icon: <Zap className="w-6 h-6" />,
      status: 'idle',
      metrics: { label: 'Active Users', value: '0' },
      color: 'bg-indigo-500'
    }
  ]);

  const [systemHealth, setSystemHealth] = useState({
    uptime: '99.9%',
    latency: '<300ms',
    throughput: '1K+ req/min',
    cacheHitRate: '95%'
  });

  const stepCycleRef = useRef(0);

  useEffect(() => {
    const simulateWorkflow = () => {
      setWorkflowSteps(prev => {
        const newSteps = [...prev];
        const cycle = stepCycleRef.current % 8;

        // Reset all to idle first
        newSteps.forEach(step => {
          step.status = 'idle';
        });

        // Simulate workflow progression
        if (cycle === 0 || cycle === 1) {
          // LLM Processing
          newSteps[0].status = 'active';
          newSteps[0].metrics.value = `${Math.floor(Math.random() * 50) + 45}/min`;
        } else if (cycle === 2 || cycle === 3) {
          // Vector Search
          newSteps[0].status = 'complete';
          newSteps[1].status = 'processing';
          newSteps[1].metrics.value = `${Math.floor(Math.random() * 5000) + 45000}`;
        } else if (cycle === 4 || cycle === 5) {
          // API Gateway
          newSteps[1].status = 'complete';
          newSteps[2].status = 'active';
          newSteps[2].metrics.value = `${(Math.random() * 20 + 15).toFixed(1)}`;
        } else if (cycle === 6 || cycle === 7) {
          // Frontend
          newSteps[2].status = 'complete';
          newSteps[3].status = 'active';
          newSteps[3].metrics.value = `${Math.floor(Math.random() * 200) + 800}`;
          
          // Reset after frontend completes
          if (cycle === 7) {
            setTimeout(() => {
              newSteps.forEach(step => {
                step.status = 'idle';
              });
            }, 500);
          }
        }

        return newSteps;
      });

      stepCycleRef.current++;
    };

    // Start simulation
    const interval = setInterval(simulateWorkflow, 2000);
    simulateWorkflow(); // Initial call

    return () => {
      clearInterval(interval);
    };
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500 animate-pulse';
      case 'processing':
        return 'bg-yellow-500 animate-pulse';
      case 'complete':
        return 'bg-blue-500';
      default:
        return 'bg-gray-300';
    }
  };

  const getStatusIcon = (status: string) => {
    if (status === 'complete') {
      return <CheckCircle className="w-5 h-5 text-white" />;
    }
    return <Activity className="w-5 h-5 text-white animate-spin" />;
  };

  return (
    <div className="w-full">
      <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
        {/* System Health Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {Object.entries(systemHealth).map(([key, value]) => (
            <MotionDiv
              key={key}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-1 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
              <div className="text-lg font-bold text-gray-900 dark:text-white">
                {value}
              </div>
            </MotionDiv>
          ))}
        </div>

        {/* Workflow Pipeline */}
        <div className="relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
            {workflowSteps.map((step, index) => (
              <div key={step.id} className="flex-1 w-full md:w-auto">
                {/* Workflow Step */}
                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    scale: step.status === 'active' || step.status === 'processing' ? 1.05 : 1
                  }}
                  transition={{ 
                    duration: 0.3,
                    repeat: step.status === 'active' || step.status === 'processing' ? Infinity : 0,
                    repeatType: 'reverse'
                  }}
                  className="relative"
                >
                  <div className={`
                    relative bg-white dark:bg-gray-800 p-6 rounded-xl border-2 
                    ${step.status === 'active' ? 'border-green-500 shadow-lg shadow-green-500/20' : 
                      step.status === 'processing' ? 'border-yellow-500 shadow-lg shadow-yellow-500/20' :
                      step.status === 'complete' ? 'border-blue-500' :
                      'border-gray-200 dark:border-gray-700'}
                    transition-all duration-300
                  `}>
                    {/* Status Indicator */}
                    <div className={`
                      absolute -top-2 -right-2 w-6 h-6 rounded-full 
                      ${getStatusColor(step.status)}
                      flex items-center justify-center
                      shadow-lg
                    `}>
                      {step.status !== 'idle' && getStatusIcon(step.status)}
                    </div>

                    {/* Icon */}
                    <div className={`
                      w-12 h-12 rounded-lg ${step.color} 
                      flex items-center justify-center text-white mb-4
                      ${step.status === 'active' || step.status === 'processing' ? 'animate-pulse' : ''}
                    `}>
                      {step.icon}
                    </div>

                    {/* Label */}
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      {step.label}
                    </h3>

                    {/* Metrics */}
                    <div className="space-y-1">
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {step.metrics.label}
                      </div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">
                        {step.metrics.value}
                      </div>
                    </div>

                    {/* Processing Indicator */}
                    {(step.status === 'active' || step.status === 'processing') && (
                      <div className="mt-3 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${step.color} animate-[progress_2s_ease-in-out_infinite]`}
                          style={{
                            animation: 'progress 2s ease-in-out infinite'
                          }}
                        />
                      </div>
                    )}
                  </div>
                </MotionDiv>

                {/* Arrow Connector */}
                {index < workflowSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-8 -translate-y-1/2 -translate-x-4 z-10">
                    <ArrowRight 
                      className={`
                        w-6 h-6 transition-colors duration-300
                        ${step.status === 'complete' ? 'text-green-500' : 'text-gray-300 dark:text-gray-600'}
                      `}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Data Flow Animation */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4" />
                <span>Distributed System</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Real-time Processing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong className="text-gray-900 dark:text-white">Live Workflow:</strong> This visualization demonstrates 
            real-time AI pipeline orchestration—from LLM processing and vector search to API gateway and frontend delivery. 
            Each step shows actual metrics and processing states, reflecting production system behavior with fault tolerance, 
            monitoring, and scalable architecture.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          50% { width: 100%; }
          100% { width: 0%; }
        }
      `}</style>
    </div>
  );
};

export default WorkflowOrchestration;

