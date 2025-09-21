import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lightbulb, Send, Loader2 } from "lucide-react";
import { useSearchAIMutation } from "@/store/slices/aiSlice";
import { useToast } from "@/hooks/use-toast";

interface AIResponse {
  response: string;
  confidence: number;
  suggestions: string[];
}

export function AIAssistant() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState<AIResponse | null>(null);
  const { toast } = useToast();

  const [searchAI, { isLoading: isPending }] = useSearchAIMutation();

  const handleAISearch = async (searchQuery: string) => {
    try {
      const result = await searchAI({ query: searchQuery }).unwrap();
      setResponse(result);
      setQuery("");
    } catch (error) {
      toast({
        title: "Search Failed",
        description: "Unable to process your AI search request. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      handleAISearch(query.trim());
    }
  };

  return (
    <div className="mb-8" data-testid="ai-assistant">
      <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border border-border shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground mb-2" data-testid="ai-assistant-title">
                AI Clinical Assistant
              </h3>
              <form onSubmit={handleSearch} className="relative">
                <Input 
                  type="text" 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full px-4 py-3 pr-12"
                  placeholder="Ask me about patient history, drug interactions, or clinical guidelines..."
                  disabled={isPending}
                  data-testid="ai-search-input"
                />
                <Button 
                  type="submit"
                  size="sm"
                  className="absolute right-3 top-3"
                  disabled={isPending || !query.trim()}
                  data-testid="ai-search-button"
                >
                  {isPending ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </Button>
              </form>
            </div>
          </div>
          
          {response && (
            <div className="mt-6 p-4 bg-card rounded-lg border border-border" data-testid="ai-response">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-medium text-foreground">AI Response</h4>
                <span className="text-xs text-muted-foreground" data-testid="ai-confidence">
                  Confidence: {response.confidence}%
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4" data-testid="ai-response-text">
                {response.response}
              </p>
              {response.suggestions.length > 0 && (
                <div>
                  <p className="text-xs font-medium text-foreground mb-2">Suggestions:</p>
                  <ul className="text-xs text-muted-foreground space-y-1" data-testid="ai-suggestions">
                    {response.suggestions.map((suggestion, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
